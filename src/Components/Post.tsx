import Image from "@/Components/Image";
import Link from "next/link";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";


interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post =  () => {

    // FETCH POST MEDIA

  // const getFileDetails = async (
  //   fileId: string
  // ): Promise<FileDetailsResponse> => {
  //   return new Promise((resolve, reject) => {
  //     imagekit.getFileDetails(fileId, function (error, result) {
  //       if (error) reject(error);
  //       else resolve(result as FileDetailsResponse);
  //     });
  //   });
  // };

  // const fileDetails = await getFileDetails("675d943be375273f6003858f");

  // console.log(fileDetails);
  return (
    <div className="p-4 border-y border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>DilleshDill reposted</span>
      </div>

      {/* POST CONTENT */}
      <div className="flex  gap-4 ">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="public/general/avatar.png" alt="User avatar" w={100} h={100} tr={true} />
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-4">
          {/* USER INFO */}
          <div className="flex justify-between ">
            <Link href="/lamaWebDev" className="flex gap-4 items-center">
              {/* <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image path="public/general/avatar.png" alt="User avatar" w={100} h={100} tr={true} />
              </div> */}
              <div className="flex items-center flex-wrap pt-2 gap-2">
                <h1 className="text-md font-bold">DilleshDill</h1>
                <span className="text-textGray">@Dill123</span>
                <span className="text-textGray">· 1 day ago</span>
              </div>
            </Link>
            <PostInfo />
          </div>
        
          {/* TEXT & MEDIA */}
          <Link href="/lamaWebDev/status/123">
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi. Laborum commodi aliquam alias
              molestias odio, ab in, reprehenderit excepturi temporibus, ducimus necessitatibus fugiat iure nam voluptas
              soluta pariatur inventore.
            </p>
          </Link>

          {/* POST IMAGE */}
          <Image path="public/general/post.jpeg" alt="Post image" w={600} h={600} />

          {/* POST TIMESTAMP */}
          <span className="text-textGray">8:41 PM · March 25, 2025</span>
          <PostInteractions/>
        </div>
      </div>
    </div>
  );
};

export default Post;
