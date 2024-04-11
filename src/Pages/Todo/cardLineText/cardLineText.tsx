import { Todo } from "../../../model"
import "./cardLineText.css"

interface CardLineTextProps {
     todo: Todo,
     colorText: string
}

const CardLineText: React.FC<CardLineTextProps> = ({ todo, colorText }) => {


     return (
          <div className="card__line_todoapp">
               <div className={`card__content_todoapp ${colorText}`}>
                    <div className="text__card_content_todoapp">
                         {todo.name}
                    </div>
               </div>
          </div>
     )
}

export default CardLineText