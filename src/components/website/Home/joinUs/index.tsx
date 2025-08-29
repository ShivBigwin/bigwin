import Tick from "@/common/Bullets/tick";


export default function JoinUs(){
    return(
<>
        <div className=" bg-orange-50 h-min p-8 rounded-lg">
            <div> <h1 className="text-3xl text-blue-950 text-center font-semibold p-4">
                    WHY TO JOIN US?
                </h1></div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 ">
                {/* Image */}
                <div className=" sm:justify-center flex items-center  ">
                    <img src="picture1.png" 
                     alt="WHY?"
                    className="w-[250px] md:w-[300px] "/>
                </div>
                {/* Text */}
                <div className="   items-center  p-6 mt-0  ">    
                    <div className="grid-cols-1 mb-4  text-sm md:text-lg font-medium text-gray-800 ">
                        <div className="flex items-center space-x-2 mb-4"><Tick/><span><a >Speedy Approval</a></span></div>
                        <div className="flex items-center space-x-2 mb-4 "><Tick/><span><a  >Flexible Repayments</a></span></div>
                        <div className="flex items-center space-x-2 mb-4 "><Tick/><span><a   >No Hidden Charges</a></span></div>
                        <div className="flex items-center space-x-2 mb-4 "><Tick/><span><a   >24*7 Available</a></span></div>
                    </div>
                </div>
            </div>
        </div>

        
    </>
    )
}