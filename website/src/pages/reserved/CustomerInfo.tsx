import "./Table.css";

const CustomerInfo = () => {
  return (
    <>
      <div className="TitleContainer">
        <p>お客様情報</p>
        <button>修正する</button>
      </div>
      <table>
        <tr>
          <th>お名前</th>
          <td>海野翔太</td>
        </tr>
        <tr>
          <th>フリガナ</th>
          <td>ウンノショウタ</td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td>nagg@hal.ac.jp</td>
        </tr>
      </table>
    </>
  );
};

export default CustomerInfo;
