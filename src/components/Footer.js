const Footer = () => {
  return (
    <div className="px-[135px] pt-[100px] pb-[28px] flex flex-col gap-6 bg-brandGray2">
      <div className="flex flex-row gap-[64px] pb-6 justify-between border border-b-brandStroke border-x-0 border-t-0 border-solid">
        <div className="flex flex-col gap-[20px]">
          <p className="text-brandDark text-[20px] leading-[26px] font-semibold">
            Legacy & Privacy
          </p>
          <p className=" text-brandTextPrimary text-base font-light">
            Privacy Notice
          </p>
          <p className=" text-brandTextPrimary text-base font-light">
            Terms of service
          </p>
          <p className=" text-brandTextPrimary text-base font-light">
            Cookies Notice
          </p>
        </div>
        <div className="flex flex-col gap-6 items-end">
          <p className=" text-brandDark text-[20px] leading-[26px] font-semibold">
            Need help? Call Us Now
          </p>
          <p className="text-brandDark text-base font-normal">
            +9972 2353 3727
          </p>
          <div className="flex flex-col gap-2 items-end">
            <p className=" text-brandTextPrimary text-base font-light">
              Monday-friday 9:00 - 20:00
            </p>
            <p className=" text-brandTextPrimary text-base font-light">
              saturday 11:00 - 15:00
            </p>
          </div>
        </div>
      </div>
      <p className=" text-brandTextPrimary text-base font-medium mx-auto">
        Copyright @ 2024 Suyash Sinha Digital Products. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
