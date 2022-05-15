import React from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Home() {
  const [rating, setRating] = React.useState<number>(4);

  return (
    <>
      <div>Next working !</div>
      <Htag tag="h1">Hello world !</Htag>
      <Button appearance="primary" arrow="down">
        Узнать подробнее
      </Button>
      <Button appearance="ghost" arrow="right">
        Узнать подробнее
      </Button>
      <Ptag size="lg">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Ptag>
      <Tag color="green">Something</Tag>
      <Tag color="red">Something</Tag>
      <Tag color="primary" href="/home" size="s">
        Something
      </Tag>

      <div style={{ backgroundColor: "#fff" }}>
        <Rating rating={rating} setRating={setRating} isEditable />
      </div>
    </>
  );
}

export default withLayout(Home);
