import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <Lista
        pets={[
          {
            id: 1,
            nome: "Bidu",
            historia: "lorem ipsiumnoijgapodijgnapdoirgf",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAsTuwn07pci-ib_g6Yz8uqacuX9BXMftHw&usqp=CAU",
          },
        ]}
      />
    </div>
  );
};

export default Home;