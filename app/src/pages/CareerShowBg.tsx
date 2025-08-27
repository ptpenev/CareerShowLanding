import careerSpark from "../assets/career_spark.svg";
import backpack from "../assets/backpack.png";
import diadrawLogo from "../assets/DiadrawLogo_Black.png";
import careerShowLogo from "../assets/Logo_CareerShow.png";
import careerBg1 from "../assets/career_bg_1.svg";
import careerBg2 from "../assets/career_bg_2.svg";

export default function CareerShowBg() {
    return (
        <div className="text-center">
            <div className="p-[22px]">
                <h2 className="text-[26px] font-[500] font-bold">Запознай се с компаниите на Career Show Пловдив и спечели награда!</h2>
                <img className="w-[116px] ml-[-22px] mt-[-70px] mb-[-30px] h-auto z-[-5]" src={careerBg1} alt="Career Show Logo" />
                <p className="font-[400] text-[20px]">Добре дошли на страницата на Career Explorer – интерактивна игра под формата
                    на куиз!</p>
                <p className="font-[400] text-[20px]">Целта е да се запознаете с всички участници на изложението и да отговорите на въпросите,
                    свързани с компаниите.</p>

                <div className="w-screen">
                    <img className="block ml-auto mb-[-70px] mt-[-30px] w-[100px] h-auto z-[-5]" src={careerBg2} alt="" />
                </div>
                <h2 className="mt-[68px] text-[22px] font-[500] font-bold">Как да участваш?</h2>
                <ol className="mt-[12px] font-[400] text-[16px] space-y-[12px] list-decimal list-inside inline-block text-left mx-auto">
                    <li>Натисни бутона Вход, за да стартираш играта.</li>
                    <li>Попълни име, фамилия и имейл адрес.</li>
                    <li>Отговори на въпросите за всички компании.</li>
                    <li>След като приключиш, автоматично ще получиш участие в томболата.</li>
                </ol>

                <h2 className="mt-[68px] text-[22px] font-[500] font-bold">Награди</h2>
                <div className="text-left text-[16px] space-y-[12px] font-[400]">
                    <p>Всички, които отговорят правилно на въпросите, участват в томбола.</p>
                    <p><span className="text-[#FF294D]">3-ма късметлии</span> ще спечелят специални награди, осигурени от <strong>Diadraw</strong>.</p>
                    <p>Победителите ще бъдат изтеглени на случаен принцип след края на изложението и обявени в сайта на играта.</p>
                    <p>Победителите ще получат персонален имейл с информация как да вземат наградите си.</p>
                </div>

                <div className="relative mt-[68px] flex items-center justify-center">
                    <img className="absolute top-[15%] left-[18%] w-[24px] -rotate-180 pointer-events-none select-none" src={careerSpark} alt="" />
                    <img className="relative z-10 w-[264px] h-auto" src={backpack} alt="Backpack" />
                    <img className="absolute bottom-[5%] right-[15%] w-[24px] pointer-events-none select-none" src={careerSpark} alt="" />
                </div>
                <p className="mt-[12px] text-[16px] font-[400]">Раница</p>

                <div className="mt-[68px] text-center border-[8px]   rounded-[16px] border-[#CAFF00] p-[23px]">
                    <p className="font-[400] uppercase">Играта се организира от Diadraw с подкрепата на Career Show Пловдив.</p>
                    <div className="flex items-center justify-evenly mt-[12px]">
                        <img className="w-[112px] h-auto" src={diadrawLogo} alt="Diadraw Logo" />
                        <img className="w-[102px] h-auto" src={careerShowLogo} alt="Career Show Logo" />
                    </div>
                </div>

                <div className="mt-[47px]">
                    <button className="bg-[#FF294D] text-[#F6F8F0] px-[15px] py-[7px] rounded-[4px] font-[400] font-[22px]">Вход</button>
                </div>
            </div>

            <div className="mt-[49px] p-[20px] text-[#F6F8F0] bg-[#321E41]">
                <h2 className="text-[20px] font-[500] font-bold">Победители</h2>
                <p className="mt-[12px] font-[400] text-[16px]">Очаквайте обявяването на победителите тук –  след финала на събитието.</p>

                <ol className="mt-[24px] font-[400] text-[16px] list-decimal list-inside text-left">
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    );
}
