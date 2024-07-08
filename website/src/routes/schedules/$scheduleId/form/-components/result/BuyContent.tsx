import { GetOrderResponseInterface } from "../../../../../../../../fe-api/interfaces/order";
import "../../../-styles/Table.css";

type BuyContentProps = {
  order: GetOrderResponseInterface;
};

const BuyContent = (props: BuyContentProps) => {
  const { order } = props;
  return (
    <div className='BuyContentDiv'>
      <div className='TitleContainer'>
        <p>購入内容</p>
      </div>
      <table>
        <tr>
          <th>映画名</th>
          <td>{order.movieName}</td>
        </tr>
        <tr>
          <th>上映日時</th>
          <td>{order.screeningDatetime}</td>
        </tr>
        <tr>
          <th>スクリーン</th>
          <td>{order.theaterName}</td>
        </tr>
        <tr>
          <th>座席</th>
          <td>
            {order &&
              order.seatDetails?.map((seat, index) => (
                <span key={index}>{seat.seatName}</span>
              ))}
          </td>
        </tr>

        <tr>
          <th>金額</th>
          <td>{order.totalPrice}円</td>
        </tr>
      </table>
    </div>
  );
};

export default BuyContent;
