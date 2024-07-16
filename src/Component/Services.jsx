import { FaMobileRetro } from "react-icons/fa6";

const Services = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <h1>Our Service</h1>
            </div>
            <div>
                <div className="flex flex-col justify-center  space-y-2">

                    <div className="">
                        <FaMobileRetro className="flex justify-center items-center text-green bg-gray-400/20 p-5" />
                    </div>
                    <p>Recharge</p>
                </div>
            </div>
        </div>
    );
};

export default Services;