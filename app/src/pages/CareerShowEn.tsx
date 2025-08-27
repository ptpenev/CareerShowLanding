import careerSpark from "../assets/career_spark.svg";
import backpack from "../assets/backpack.png";
import diadrawLogo from "../assets/DiadrawLogo_Black.png";
import careerShowLogo from "../assets/Logo_CareerShow.png";
import careerBg1 from "../assets/career_bg_1.svg";
import careerBg2 from "../assets/career_bg_2.svg";

export default function CareerShowEn() {
    return (
        <div className="text-center">
            <div className="p-[22px]">
                <h2 className="text-[26px] font-[500] font-bold">Meet the companies at Career Show Plovdiv and win a prize!</h2>
                <img className="relative w-[116px] ml-[-22px] mt-[-55px] mb-[-30px] h-auto z-[-222]" src={careerBg1} alt="Career Show Logo" />
                <p className="font-[400] text-[20px]">Welcome to the Career Explorer page – an interactive quiz-style game!</p>
                <p className="font-[400] text-[20px]">The goal is to get to know all the exhibitors and answer questions related to the participating companies.</p>

                <div className="w-screen">
                    <img className="relative block ml-auto mb-[-70px] mt-[-30px] w-[100px] h-auto z-[-5]" src={careerBg2} alt="" />
                </div>
                <h2 className="mt-[68px] text-[22px] font-[500] font-bold">How to join?</h2>
                <ol className="mt-[12px] font-[400] text-[16px] space-y-[12px] list-decimal list-inside inline-block text-left mx-auto">
                    <li>Click the Login button to start the game.</li>
                    <li>Enter your first name, last name, and email address.</li>
                    <li>Answer the questions about all the companies.</li>
                    <li>Once you finish, you’ll automatically be entered into the raffle.</li>
                </ol>

                <h2 className="mt-[68px] text-[22px] font-[500] font-bold">Prizes</h2>
                <div className="text-left text-[16px] space-y-[12px] font-[400]">
                    <p>Everyone who answers the questions correctly will take part in the raffle.</p>
                    <p><span className="text-[#FF294D]">3 lucky winners</span> will receive special prizes provided by <strong>Diadraw</strong>.</p>
                    <p>Winners will be drawn at random after the exhibition ends and announced on the game's website.</p>
                    <p>Each winner will also receive a personal email with instructions on how to claim their prize.</p>
                </div>

                <div className="relative mt-[68px] flex items-center justify-center">
                    <img className="absolute top-[15%] left-[18%] w-[24px] -rotate-180 pointer-events-none select-none" src={careerSpark} alt="" />
                    <img className="relative z-10 w-[264px] h-auto" src={backpack} alt="Backpack" />
                    <img className="absolute bottom-[5%] right-[15%] w-[24px] pointer-events-none select-none" src={careerSpark} alt="" />
                </div>
                <p className="mt-[12px] text-[16px] font-[400]">Backpack</p>

                <div className="mt-[68px] text-center border-[8px]   rounded-[16px] border-[#CAFF00] p-[23px]">
                    <p className="font-[400] uppercase">The game is organized by Diadraw with the support of Career Show Plovdiv.</p>
                    <div className="flex items-center justify-evenly mt-[12px]">
                        <img className="w-[112px] h-auto" src={diadrawLogo} alt="Diadraw Logo" />
                        <img className="w-[102px] h-auto" src={careerShowLogo} alt="Career Show Logo" />
                    </div>
                </div>

                <div className="mt-[47px]">
                    <button className="bg-[#FF294D] text-[#F6F8F0] px-[15px] py-[7px] rounded-[4px] font-[400] font-[22px]">Login</button>
                </div>
            </div>

            <div className="mt-[49px] p-[20px] text-[#F6F8F0] bg-[#321E41]">
                <h2 className="text-[20px] font-[500] font-bold">Winners</h2>
                <p className="mt-[12px] font-[400] text-[16px]">The winners will be announced here – after the event ends.</p>

                <ol className="mt-[24px] font-[400] text-[16px] list-decimal list-inside text-left">
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    );
}
