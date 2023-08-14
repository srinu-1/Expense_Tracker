import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem (props){
 
    return (
        <div className="Item">
          <ExpenseDate date={props.date}/>
          

          <div className='description'>
            <center><h2>{props.title}</h2></center>
            <div className='price'>INR {props.amount}</div>
          </div>
                        
        </div>
    );
}

export default ExpenseItem;