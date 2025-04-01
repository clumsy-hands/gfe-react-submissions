 export default function TestimonialCard() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 ">
            <div className="flex flex-col flex-start bg-white shadow-lg rounded-lg p-[24px] w-[340px]">
                <div className="flex flex-row flex-start gap-[16px]">
                    <img src="/src/assets/img/profile-thumbnail.png" alt="profile-thumbnail"
                     className="w-[48px] h-[48px]"></img>
                     <div className="flex flex-col grow">
                        <h2 className="text-lg font-semibold">Sarah Dole</h2>
                        <p className="text-gray-500 text-xs">@sarahdole</p>
                     </div>
                </div>
                <p className="text-gray-500 mt-2"> I've been searching for high-quality abstract images for my design projects,
                and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! </p>
            </div>
        </div>
    )
}