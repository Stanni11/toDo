import './List.css';
import img1 from '../img/bill.png'
const List = (props) => {
    return (
        <div>
            <h1>To do List</h1>
            <ul>
                <div className="first"><img src={img1} alt="gym" />
                    <li>{props.task1}</li>
                    <img src="/img/gym.png" alt="gym" /></div>
                <div className="first">
                    <img src="/img/check.png" alt="" />
                    <li>{props.task2}</li>
                    <img src="/img/bill.png" alt="gym" /></div>
                <div className="first">
                    <img src="/img/doing.png" alt="" />
                    <li>{props.task3}</li>
                    <img src="/img/dance.png" alt="gym" /> </div>
                <div className="first">
                    <img src="/img/doing.png" alt="" />
                    <li>{props.task4}</li>
                    <img src="/img/eat.png" alt="gym" /></div>
                <div className="first">
                    <img src="/img/no.png" alt="" />
                    <li>{props.task5}</li>
                    <img src="/img/book.png" alt="gym" /></div>
                <div className="first">
                    <img src="/img/no.png" alt="" />
                    <li>{props.task6}</li>
                    <img src="/img/organize.png" alt="gym" /></div>
            </ul>
        </div>
    )
}

export default List