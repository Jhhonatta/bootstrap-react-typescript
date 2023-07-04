import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

interface IButtonDelete {
  index: number;
}

const ButtonDelete = ({ index }: IButtonDelete) => {
  const { listTask, setListTask } = useContext(UserContext);

  const handlerButtonDelete = () => {
    const newListTask = listTask.filter((_, indice) => indice !== index);
    setListTask(newListTask);
  };

  return (
    <Button className="m-0 p-0 button-delete" onClick={handlerButtonDelete}>
      <BsTrash />
    </Button>
  );
};

export default ButtonDelete;
