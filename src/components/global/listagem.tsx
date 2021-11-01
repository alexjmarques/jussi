import Modal from "react-modal";
import { RootObject } from '../../interfaces';
import { ListGroup, Image, Alert } from 'react-bootstrap';
import noImg from "../../assets/noImg.jpg";
import Moment from 'react-moment';
import 'moment-timezone';
import { useState } from 'react';

interface ListagemProps {
  results: RootObject[];
}

export const Listagem = ({ results }: ListagemProps) => {
  const [show, setShow] = useState(true);

  if (results.length > 0) {
    return (
      <ListGroup>
        {results.map((item) => (
          <ListGroup.Item key={item.person.id}>
            {/* <Image src={item.person.image.medium === null ? noImg : item.person.image.medium} /> */}
            <div>Nome: {item.person.name}</div>
            <div>Nascimento: <Moment format="DD/MM/YYYY" date={item.person.birthday} /></div>
            <div>Gênero: {item.person.gender === "Male" ? "Masculino" : "Feminino"}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  } else {
    return (
      <Alert variant="danger" className="text-center">
        <Alert.Heading>Oops!</Alert.Heading>
        <p>Sua pesquisa não retornou nenhum resultado. Tente novamente com outro Nome!
        </p>
      </Alert>
    );
  }
}
