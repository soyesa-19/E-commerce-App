import { useSelector } from "react-redux";
import OrderSummary from "../../components/OrderSummary";

const Chekout = () => {
  const { totalPrice, items } = useSelector((store) => store.buyNow);
  return (
    <div className="flex flex-row justify-between mx-auto gap-7">
      {/* first block */}
      <div className="shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05)] rounded-[6px] w-[302px]">
        <div className=" p-4 border-b shadow-[0px_-1px_0px_0px_rgba(240,240,240,1)]">
          <p>Fee trial</p>
        </div>
        <div className=" py-[14px] px-6 border-none">
          <p>helofe hufhrufh rufhr udede dededede ded ededed f</p>
        </div>
        <div className="p-4 border-b shadow-[0px_1px_0px_0px_rgba(240,240,240,1)]">
          <p>Paid plan</p>
        </div>
        <div className="py-[14px] px-6 border-none">
          <p>hufh fhrfuhrufh uhrfu hruf hr ccdcdcd cdcdcdcdcdcdcc</p>
        </div>
      </div>
      {/* secound block */}
      <div className=" w-[602px]">
        <OrderSummary totalPrice={totalPrice} totalQty={items.length} />
      </div>
    </div>
  );
};

export default Chekout;
