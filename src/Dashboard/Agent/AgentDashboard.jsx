import { Link } from "react-router-dom";
import Banner from "../../Component/Banner";
import { MdAttachMoney } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const AgentDashboard = () => {
    return (
        <div>
            <Banner/>
            <div className="-mt-10">
                <div className="card bg-base-100 w-3/4 mx-auto shadow-xl rounded-md py-5">
                    <div className="flex justify-between">
                        <div className="ml-8">
                            <p>Your Balance</p>
                            <p className="font-bold flex justify-center items-center"><TbCurrencyTaka /> 2348935</p>
                        </div>
                        <div className="mr-8">
                        <button className="hover:border-b border-primary">Statement</button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-8">
                        <Link className="flex flex-col justify-center items-center space-y-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                    <MdAttachMoney className="ml-2 mt-2" />
                                </div>
                            </div>

                            <p>Send Money</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center space-y-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                    <GiTakeMyMoney className="ml-2 mt-2" />
                                </div>
                            </div>

                            <p className="leading-5">Cash In <br /> Request</p>
                        </Link>
                        <Link className="flex flex-col justify-center items-center space-y-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                    <FaMoneyBillTrendUp className="ml-2 mt-2" />
                                </div>
                            </div>

                            <p className="leading-5">Cash Out <br /> Request</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;