import { FormEvent, useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiSearch } from "react-icons/fi";
import { Api } from '../../providers';
import { Listagem } from './listagem';



export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [itens, setItens] = useState([])
  const [input, setTextForm] = useState("");
  const [show, setShow] = useState(false);

  async function HandleSearch(event: FormEvent) {
    event.preventDefault();

    if (input.length > 0) {
      try {
        setLoading(true);
        const response = await Api.get(`search/people?q=${input}`);
        const result = response.data

        if (result) {
          setLoading(false);
          setItens(result);
          handleShow();
        }

      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {


      toast.warn('Preencha o campo Busca para efetuar uma pesquisa!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleClose = () => {
    setShow(false)
    setItens([]);
    setTextForm("");
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Form className="searchForm" onSubmit={HandleSearch}>
        <Form.Group className="labelEnv">
          <Form.Control disabled={loading} value={input} onChange={(event) => setTextForm(event.target.value)} type="text" placeholder="Buscar" />
          <Button disabled={loading} type="submit"><FiSearch /></Button>
        </Form.Group>
      </Form>

      <Modal show={show} onHide={handleClose} className="modal-busca">
        <Modal.Header closeButton>
          <Modal.Title>Buscar Pessoas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Listagem results={itens} />
        </Modal.Body>
      </Modal>

      <ToastContainer />

    </>
  );
}
