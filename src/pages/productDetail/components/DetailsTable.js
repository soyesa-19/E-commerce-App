const DetailsTable = ({ brand, seller, policy, title }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className=" text-brandDark font-semibold text-[18px] leading-[26px]">
        {title}
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
          <p className="text-brandTextPrimary font-semibold text-base">Brand</p>
          <p className="text-brandDark font-semibold text-base">{brand}</p>
        </div>
        <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
          <p className="text-brandTextPrimary font-semibold text-base">
            Sold By
          </p>
          <p className="text-brandDark font-semibold text-base">{seller}</p>
        </div>
        <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
          <p className="text-brandTextPrimary font-semibold text-base">
            Return policy
          </p>
          <p className="text-brandDark font-semibold text-base">{policy}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsTable;
