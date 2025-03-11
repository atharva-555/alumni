import { Tooltip } from "flowbite-react";
import { Datepicker, Select, Label, Modal } from "flowbite-react";
import { useContext } from "react";
import { LuLampDesk } from "react-icons/lu";
import { FaPersonWalking } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { myContext } from "../../../utils/PrivateRoutes";
import { useState, useEffect } from "react";
import moment from "moment";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const generateTimeOptions = (eventDate) => {
  const times = [];
  const start = moment().startOf("day");
  const end = moment().endOf("day");
  const now = moment();

  while (start <= end) {
    if (
      !eventDate ||
      moment(eventDate).isAfter(now, "day") ||
      start.isAfter(now)
    ) {
      times.push(start.format("h:mma"));
    }
    start.add(30, "minutes");
  }

  return times;
};

export default function BookSession({
  tabSelected,
  tabNotSelected,
  handleTabSetting,
  eventDate,
  setEventDate,
  eventTime,
  setEventTime,
  // eventLength,
  // setEventLength,
  repeatType,
  setRepeatType,
  endTimes,
  setEndTimes,
  handleToggleChange,
  handleModalSubmit,
}) {
  const { activeEventTab, activePartnerTab } = useContext(myContext);

  const [timeOptions, setTimeOptions] = useState(generateTimeOptions());
  const [isPastDate, setIsPastDate] = useState(false);
  const [showAdvance, setShowAdvance] = useState(false);
  const [isDoNotRepeat,setIsDoNotRepeat] = useState(false);


  useEffect(() => {
    setTimeOptions(generateTimeOptions(eventDate));
    const now = moment();
    const selectedDate = moment(eventDate, "YYYY-MM-DD");
    setIsPastDate(selectedDate.isBefore(now, "day"));
  }, [eventDate]);

  useEffect(() => {
    if(repeatType == 'Do not repeat'){
      setIsDoNotRepeat(true);
    }else{
      setIsDoNotRepeat(false)
    }
  },[repeatType])

  return (
    <>
      <form className="space-y-4" onSubmit={handleModalSubmit}>
        <div className="flex gap-2">
          <div className="w-[33.33%]">
            <div className="mb-1 block">
              <Label
                htmlFor="eventdate"
                value="Date"
                className="text-md font-normal"
              />
            </div>
            <Datepicker
              id="eventdate"
              name="eventdate"
              selected={eventDate}
              onSelectedDateChanged={(date) =>
                setEventDate(moment(date).format("YYYY-MM-DD"))
              }
              style={{
                border: "1px solid #008080",
                borderRadius: "0px",
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="w-[33.33%]">
            <div className="mb-1 block">
              <Label
                htmlFor="eventtime"
                value="Time"
                className="text-md font-normal"
              />
            </div>
            <Select
              id="eventtime"
              name="eventtime"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              style={{
                border: "1px solid #008080",
                borderRadius: "0px",
                backgroundColor: "white",
              }}
              required
            >
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
          <div className="w-[33.33%]">
            <div className="mb-1 block">
              <Label
                htmlFor="eventlength"
                value="Length"
                className="text-md font-normal"
              />
            </div>
            <div className="p-2 border border-[#008080]">
              <h1 className="">50 minutes</h1>
            </div>
{/*             <Select
              id="eventlength"
              name="eventlength"
              value={eventLength}
              onChange={(e) => setEventLength(e.target.value)}
              style={{
                border: "1px solid #008080",
                borderRadius: "0px",
                backgroundColor: "white",
              }}
              required
            >
              <option>30 minutes</option>
              <option>50 minutes</option>
              <option>70 minutes</option>
            </Select> */}
          </div>
        </div>
        
        <div className="w-full">
          <div className="mb-1 block">
            <Label
              htmlFor="taskType"
              value="My Task"
              className="text-md font-normal"
            />
          </div>
          <div className="flex gap-2 formTabs">
            <div className="w-[33.33%]">
              <Tooltip content="Ideal for writing, emailing, coding, and other tasks.">
                <button
                  type="button"
                  className="w-full flex justify-center gap-2 bg-[#F9FAFB] text-sm border-2 border-greenbg py-2 px-8 text-formgray"
                  style={
                    activeEventTab === "deskEvent"
                      ? tabSelected
                      : tabNotSelected
                  }
                  onClick={() => handleTabSetting("deskEvent")}
                >
                  <LuLampDesk
                  className="hidden md:block"
                    style={{ fontSize: "18px", marginBottom: "5px" }}
                  />
                  Desk
                </button>
              </Tooltip>
            </div>
            <div className="w-[33.33%]">
              <Tooltip content="Perfect for workouts, household chores, and other active tasks.">
                <button
                  type="button"
                  className="w-full flex justify-center gap-2 bg-[#F9FAFB] text-sm border-2 border-greenbg py-2 px-6 text-formgray"
                  style={
                    activeEventTab === "movingEvent"
                      ? tabSelected
                      : tabNotSelected
                  }
                  onClick={() => handleTabSetting("movingEvent")}
                >
                  <FaPersonWalking
                  className="hidden md:block"
                    style={{ fontSize: "18px", marginBottom: "5px" }}
                  />
                  Moving
                </button>
              </Tooltip>
            </div>
            <div className="w-[33.33%]">
              <Tooltip content="When you're multitasking or still making decisions.">
                <button
                  type="button"
                  className="w-full flex justify-center gap-2 bg-[#F9FAFB] text-sm border-2 border-greenbg py-2 px-6 text-center text-formgray"
                  style={
                    activeEventTab === "anythingEvent"
                      ? tabSelected
                      : tabNotSelected
                  }
                  onClick={() => handleTabSetting("anythingEvent")}
                >
                  <IoShuffle
                  className="hidden md:block"
                    style={{ fontSize: "18px", marginBottom: "5px" }}
                  />
                  Anything
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="w-full">
        <div className="flex gap-2">
            <label className="w-full inline-flex gap-3 items-center justify-between cursor-pointer">
              <span className="text-md text-black font-normal">
                Quite Mode
              </span>
              <input
                onClick={handleToggleChange}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 border-2 border-greenbg peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"></div>
            </label>
          </div>
        </div>

        <div className="w-full flex gap-2">
          <div className="w-full flex flex-col">
            <div className="mb-1 block">
              <Label
                htmlFor="partnerType"
                value="Partner"
                className="text-md font-normal"
              />
            </div>

            <div className="flex gap-2 formTabs">
              <div className="w-[60%] md:w-[50%]">
                <Tooltip content="Matches you with your Favorite partners whenever they are available">
                  <button
                    type="button"
                    className="w-full flex justify-center gap-2 text-sm border-2 border-greenbg py-2 px-6 text-formgray"
                    style={
                      activePartnerTab === "favoritePartner"
                        ? tabSelected
                        : tabNotSelected
                    }
                    onClick={() => handleTabSetting("favoritePartner")}
                  >
                    <IoStar style={{ fontSize: "18px", marginBottom: "5px" }} />
                    Prefer Favorites
                  </button>
                </Tooltip>
              </div>
              <div className="w-[40%] md:w-[50%]">
                <Tooltip content="Matches you with the first available person">
                  <button
                    type="button"
                    className="w-full flex justify-center gap-2 text-sm border-2 border-greenbg py-2 px-6  text-formgray"
                    style={
                      activePartnerTab === "anyonePartner"
                        ? tabSelected
                        : tabNotSelected
                    }
                    onClick={() => handleTabSetting("anyonePartner")}
                  >
                    <FaGlobeAmericas
                      style={{ fontSize: "18px", marginBottom: "5px" }}
                    />
                    Anyone
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

{
  !showAdvance &&

        <div
          onClick={() => setShowAdvance(true)}
          className="w-fit mx-auto pt-6 flex gap-2 justify-center font-medium items-center text-textcolor"
        >
          <IoMdArrowDropdown />
          <p className="text-md cursor-pointer">Show advanced options</p>
        </div>
        }
        {
          showAdvance 
          ?
          <div className="pt-6 flex gap-2">
          <div className="basis-1/2">
            <div className="mb-1 block">
              <Label
                htmlFor="repeatType"
                value="Repeat"
                className="text-md font-normal"
              />
            </div>
            <Select
              id="repeatType"
              name="repeatType"
              value={repeatType}
              onChange={(e) => setRepeatType(e.target.value)}
              style={{
                border: "1px solid #008080",
                borderRadius: "0px",
                backgroundColor: "white",
              }}
              required
            >
              <option>Do not repeat</option>
              <option>Repeat weekly</option>
              <option>Repeat daily</option>
            </Select>
          </div>
          <div className="basis-1/2">
            <div className="mb-1 block">
              <Label
                htmlFor="endTimes"
                value="End after"
                className="text-md font-normal"
              />
            </div>
            <Select
            disabled={isDoNotRepeat}
              id="endTimes"
              name="endTimes"
              value={endTimes}
              onChange={(e) => setEndTimes(e.target.value)}
              style={{
                border: "1px solid #008080",
                borderRadius: "0px",
                backgroundColor: "white",
              }}
              className={`${isDoNotRepeat ? 'bg-bordercolor border border-formgray':null}`}
              required
            >
              {isDoNotRepeat ? <option> </option>: null}
              <option value={1}>1 Times</option>
              <option value={2}>2 Times</option>
              <option value={3}>3 Times</option>
              <option value={4}>4 Times</option>
              <option value={5}>5 Times</option>
              <option value={6}>6 Times</option>
              <option value={7}>7 Times</option>
              <option value={8}>8 Times</option>
              <option value={9}>9 Times</option>
              <option value={10}>10 Times</option>
            </Select>
          </div>
        </div>
        :
        null
        }
        
        {
          showAdvance &&
          <div
          onClick={() => setShowAdvance(false)}
          className="w-fit mx-auto pt-6 flex gap-2 justify-center font-medium items-center text-textcolor"
        >
          <IoMdArrowDropup/>
          <p className="text-md cursor-pointer">Hide advanced options</p>
        </div>
        }
        
        <div id="modalFormBookButton" className="w-full mt-10">
          <button
            disabled={isPastDate}
            type="submit"
            className={`py-3 w-full  ${
              isPastDate
                ? "cursor-not-allowed bg-bordercolor border-2 border-formgray opacity-50"
                : "text-white bg-textcolor"
            }`}
          >
            Book
          </button>
        </div>
      </form>
    </>
  );
}
