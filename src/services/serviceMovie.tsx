import { Api } from "../providers";
import { RootObject } from "../interfaces";

const getAll = () => Api.get<RootObject[]>(`schedule/full`)

export const ServiceMovie = {
  getAll,
}
