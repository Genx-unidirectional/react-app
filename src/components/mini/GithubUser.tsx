import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import { GithubUserSchema, GithubUserType } from "@/types/github";
import Wrapper from "./Wrapper";
import { off } from "process";
import Link from "next/link";
function GithubUser() {
  const [url, setUrl] = useState("Genx-unidirectional");
  const [user, setUser] = useState<GithubUserType>();
  const fetchUser = async (name: string) => {
    try {
      const result = await axios.get(`https://api.github.com/users/${name}`);
      const data = result.data;
      GithubUserSchema.safeParse(data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = () => {
    fetchUser(url);
    setUrl("");
  };
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchUser(url);
    }
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <Wrapper className="bg-black  flex flex-col gap-3 text-white">
      <div className="p-1 flex w-full gap-2">
        <input
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="p-2 w-full text-black rounded-lg"
          type="text"
          value={url}
        />
        <button
          onClick={handleClick}
          className="rounded-lg p-2 text-black bg-white "
        >
          search
        </button>
      </div>
      <hr className="w-[90%] mx-auto" />
      <div className="flex w-full  border-b border-slate-700 items-center justify-between gap-2">
        <div className="flex flex-col  items-center justify-center gap-2">
          <img
            className="rounded-full w-40 border-white
             border-2"
            src={user?.avatar_url}
            alt="avatar"
          />
          <p>{user?.name}</p>
        </div>
        <div className="flex-grow flex justify-evenly ">
          <p className="mb-5 font-medium text-lg">
            Followers: {user?.followers}
          </p>
          <p className="mb-5 font-medium text-lg">
            Following: {user?.following}
          </p>
        </div>
      </div>
      <div className="flex w-full  mt-2 justify-evenly h-20">
        <p className="border-r text-xl font-medium grid place-content-center border-slate-600 w-1/2">
          Repos: {user?.public_repos}
        </p>
        {user ? (
          <Link
            className="w-1/2 text-xl text-blue-400 underline font-medium flex justify-center items-center"
            href={user?.url!}
          >
            Link to profile
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </Wrapper>
  );
}
export default GithubUser;
