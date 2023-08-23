export interface Loja {
  title?: string;
  phone?: string;
  email?: string;
  adress?: {
    firstLine?: string;
    secondLine?: string;
  };
}
export interface Props {
  title: string;
  lojas: Array<Loja>;
}

export default function Lojas({ title, lojas }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {lojas.map((loja) => {
          return (
            <li>
              <div>
                <h3>{loja.title}</h3>
                <p>{loja.phone}</p>
                <p>{loja.email}</p>
                <p>{loja.adress?.firstLine}</p>
                <p>{loja.adress?.secondLine}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
