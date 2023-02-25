// import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
  const { action } = useParams();
  // const [title, setTitle] = useState("");
  // const [address, setAddress] = useState("");
  // const [addedPhotos, setAddedPhotos] = useState([]);
  // const [photoLink, setPhotoLink] = useState("");
  // const [description, setDescription] = useState("");

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex bg-primary px-4 py-2 text-white rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add new place
          </Link>{" "}
          <br />
          places
        </div>
      )}

      {/* if param is 'new */}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl text-semibold mt-4">Title</h2>
            <p className="text-sm text-gray-500">
              Title for your place, should be short and catchy
            </p>
            <input type="text" placeholder="title, for ex: My lovely apt" />

            <h2 className="text-2xl text-semibold mt-4">Address</h2>
            <p className="text-sm text-gray-500">Address to this place</p>
            <input type="text" placeholder="address" />

            <h2 className="text-2xl text-semibold mt-4">Photos</h2>
            <p className="text-sm text-gray-500">more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a Link ...jpg"} />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 mt-4 md:grid-cols-4 lg:grid-cols-6">
              <button
                className="flex justify-center border bg-tr
                 rounded-2xl p-8 text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>

            <h2 className="text-2xl text-semibold  mt-4">Description</h2>
            <p className="text-sm text-gray-500">description of the place</p>
            <textarea />

            <h2 className="text-2xl text-semibold mt-4">Perks</h2>
            <p className="text-sm text-gray-500">
              select all the perks of your place
            </p>
            <div className="grid grid-cols-2 gap-2 mt-3 md:grid-cols-3 lg:grid-cols-4">
              <label className="border p-4 flex gap-2 rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
                <span>Wifi</span>
              </label>

              <label className="border p-4 flex gap-2 rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <span>Free parking spot</span>
              </label>

              <label className="border p-4 flex gap-2 rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <span>TV</span>
              </label>

              <label className="border p-4 flex gap-2 rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <span>Pets</span>
              </label>

              <label className="border p-4 flex gap-2 rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span>Private entrance</span>
              </label>
            </div>

            <h2 className="text-2xl text-semibold  mt-4">Extra Info</h2>
            <p className="text-sm text-gray-500">house rules, etc</p>
            <textarea />

            <h2 className="text-2xl text-semibold  mt-4">
              Check in & out time
            </h2>
            <p className="text-sm text-gray-500">
              add check in and check out time with maximum number of guests
            </p>
            <div className="grid grid-cols-3 gap-2 ">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input type="text" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max guests</h3>
                <input type="text" />
              </div>
            </div>
            <div className="my-3">
              <button className="primary ">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
