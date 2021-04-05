import { DataFormat } from "src/components/Dashboard-initial/dashboard.model";

export const content: DataFormat = {
  widgets: [
    {
      title: "Numero de Pedidos",
      value: 35698,
      prev: "2019",
      current: "2020",
    },
    {
      title: "Lista de Pedidos",
      current: "abr/2021",
      items: [
        {
          title: "Pedro",
          value: "R$ 32,50",
        },
        {
          title: "Rafael",
          value: "R$ 54,95",
        },
        {
          title: "Ingrid",
          value: "R$ 12,00",
        },
      ],
    },
    {
      title: "Valor Total de Pedidos",
      current: "jan-mar de 2021",
      items: [
        {
          name: "Jan",
          data: [15000],
        },
        {
          name: "Fev",
          data: [12000],
        },
        {
          name: "Mar",
          data: [25000],
        },
      ],
    },
  ],
};
