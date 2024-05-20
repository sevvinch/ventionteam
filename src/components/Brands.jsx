import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="">
      <div className="container mx-auto my-0 px-4">
        <div className=""></div>
        <div className="flex justify-between items-center gap-14 p-10 border-b-2 border-gray-300">
          <Marquee>
            <div className="">
              <img
                src="https://join.ventionteams.com/media/documents/google_cloud_black.svg"
                alt=""
                className="w-[10px] h-[10px] mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/oracle_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/hydrogen_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/docusign_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/aws_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/salesforce_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
            <div className="">
              <img
                src="  https://join.ventionteams.com/media/documents/microsoft_black.svg"
                alt=""
                className="mr-3"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Brands
