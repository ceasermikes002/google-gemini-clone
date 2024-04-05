import {
  Code2,
  CompassIcon,
  GemIcon,
  ImageIcon,
  LightbulbIcon,
  MessageCircle,
  Mic,
  SendHorizonalIcon,
  UserCircleIcon,
} from "lucide-react";
import "./Main.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    prevPrompt,
    setPrevPrompt,
    onSend,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="flex-[1] pb-[15vh] relative min-h-[100vh]">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <UserCircleIcon size={30} />
      </div>
      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="my-[15px] mx-0 text-[56px] text-[#c4c7c5] font-[500] p-[20px]">
              <p>
                <span className="span">Hello, Chima.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards grid gap-[15px] p-[20px]">
              <div className="card relative hover:bg-[#dfe4df]">
                <p className="card-p">
                  Suggest places to go for a family vacation
                </p>
                <CompassIcon
                  className="icon absolute bottom-0 right-0 m-4 rounded-[100%] p[20px]"
                  size={40}
                />
              </div>
              <div className="card relative">
                <p className="card-p">
                  Briefly summarize this concept: urban planning
                </p>
                <LightbulbIcon
                  className="icon absolute bottom-0 right-0 m-4 rounded-[100%] p[20px]"
                  size={40}
                />
              </div>
              <div className="card relative">
                <p className="card-p">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <MessageCircle
                  className="icon absolute bottom-0 right-0 m-4 rounded-[100%] p[20px]"
                  size={40}
                />
              </div>
              <div className="card relative">
                <p className="card-p">
                  Tell me about React js and React native
                </p>
                <Code2
                  className="icon absolute bottom-0 right-0 m-4 rounded-[100%] p[20px]"
                  size={40}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="py-[0px] px[5%] max-h-[70vh] overflow-y-scroll result">
              <div className="my-[40px] mx-0 flex items-center gap-[20px]">
                <UserCircleIcon/>
                <p>{recentPrompt}</p>
              </div>
              <div className="flex items-start gap-[20px]">
                <img src="/gemini_icon.png" alt="" className="w-[40px] rounded-[50%]" />
                {loading ? 
                <div className="w-[100%]  flex flex-col gap-[10px] loader">
                  <hr className="hr" />
                  <hr className="hr" />
                  <hr className="hr" />
                </div>
                :<article className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html:resultData}}></article>
                }                
              </div>
            </div>
          </>
        )}

        <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20] rounded-[50px]">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent border-none outline-none pl-3 text-[18px]"
            />
            <div className="flex gap-3 pr-3">
              <ImageIcon className="input-icon" />
              <Mic className="input-icon" />
              <SendHorizonalIcon
                className="input-icon"
                onClick={() => onSend()}
              />
            </div>
          </div>
          <p className="text-[13px] my-[15px] mx-auto text-center font-[300]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a
              href="https://support.google.com/gemini?p=privacy_notice"
              className="underline"
            >
              Your privacy
            </a>{" "}
            and{" "}
            <a
              href="https://support.google.com/gemini?p=privacy_notice"
              className="underline"
            >
              Gemini apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
