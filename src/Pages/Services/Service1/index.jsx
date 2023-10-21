import Multiselect from "multiselect-react-dropdown";
import "./RecommendationSys.css"
function Service1() {
  return (
    <main>
      <section className="container recommend">
        <h1 className="sec-title mb-5">Recommendation System</h1>
        <div className="select ">
          <Multiselect
            className=""
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={[
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
              "Option 5",
              "Option 6",
              "Option 7",
              "Option 8",
              "Option 9",
              "Option 10",
              "Option 11",
              "Option 12",
              "Option 13",
              "Option 14",
              "Option 15",
              "Option 16",
              "Option 17",
              "Option 18",
              "Option 19",
              "Option 20",
              "Option 21",
              "Option 22",
              "Option 23",
              "Option 24",
              "Option 25",
              "Option 26",
              "Option 27",
              "Option 28",
              "Option 29",
              "Option 30",
            ]}
          />
          <div className="" dir="">
            <button className="submit">Ok</button>
          </div>
        </div>
        <div className="result w-100">
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="recommended">
          <div className="dr-card text-center">
            <h3 className="dr-name">Doctor Name</h3>
            <p className="text-black-50">Specialization : Brain</p>
            <p className="text-black-50">Experience : 10 Years</p>
            <p className="text-black-50">Location : USA</p>
            <p className="">
              <span className="text-black-50">Rating : 4.5</span> ⭐
            </p>
            <p className="">
              <span className="text-black-50"> Price : $ 400</span>
            </p>
            <button className="btn-link border-none secondary-bg">
              Book Appointment
            </button>
          </div>
          <div className="dr-card text-center">
            <h3 className="dr-name">Doctor Name</h3>
            <p className="text-black-50">Specialization : Brain</p>
            <p className="text-black-50">Experience : 10 Years</p>
            <p className="text-black-50">Location : USA</p>
            <p className="">
              <span className="text-black-50">Rating : 4.5</span> ⭐
            </p>
            <p className="">
              <span className="text-black-50"> Price : $ 400</span>
            </p>
            <button className="btn-link border-none secondary-bg">
              Book Appointment
            </button>
          </div>
          <div className="dr-card text-center">
            <h3 className="dr-name">Doctor Name</h3>
            <p className="text-black-50">Specialization : Brain</p>
            <p className="text-black-50">Experience : 10 Years</p>
            <p className="text-black-50">Location : USA</p>
            <p className="">
              <span className="text-black-50">Rating : 4.5</span> ⭐
            </p>
            <p className="">
              <span className="text-black-50"> Price : $ 400</span>
            </p>
            <button className="btn-link border-none secondary-bg">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Service1