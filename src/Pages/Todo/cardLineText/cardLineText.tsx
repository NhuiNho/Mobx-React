import { observer } from "mobx-react-lite"
import { Todo } from "../../../model"
import "./cardLineText.css"

interface CardLineTextProps {
     todo: Todo,
     colorText: string
}

const CardLineText: React.FC<CardLineTextProps> = observer(({ todo, colorText }) => {


     return (
          <div className="card">
               <div className={`card-content ${colorText}`}>
                    <div className="text">
                         {todo.name}
                    </div>
               </div>
          </div>
     )
})

export default CardLineText