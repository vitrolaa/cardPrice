import { Card } from "./components/card";

export function App() {
  return (
    <>
      <Card
        description="PARA VOCÊ DECOLAR"
        title="Ultimate"
        price="29,97"
        darkMode
        features={[
          "usuários ilimitados",
          "suporte 24/7",
          "CSM dedicado",
          "treinamentos",
        ]}
      />
    </>
  );
}
