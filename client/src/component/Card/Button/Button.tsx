import React from "react";
import Button from "@material-ui/core/Button";

interface ButtonComponentProps {
  id: number;
  toggleHandler: (id: number) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  id,
  toggleHandler,
}) => {
  return (
    <Button
      variant="contained"
      onClick={() => toggleHandler(id)}
      color="primary"
    >
      Отправить 100$
    </Button>
  );
};

export default ButtonComponent;
