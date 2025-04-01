 export default function TestimonialCard() {
    return (
        <div className="flex flex-row justify-center min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[200px] w-full">
            <div className="flex flex-col flex-start bg-white shadow-lg rounded-lg p-[24px] w-[340px] h-fit">
                <div className="flex flex-row flex-start gap-[16px]">
                    <img src="/img/profile-thumbnail.png" alt="profile thumbnail"
                     className="w-[48px] h-[48px]"></img>
                     <div className="flex flex-col grow gap-[2px]">
                        <h2 className="text-lg font-semibold text-neutral-900">Sarah Dole</h2>
                        <p className="text-gray-500 text-xs">@sarahdole</p>
                     </div>
                </div>
                <p className="text-neutral-600 mt-2"> I've been searching for high-quality abstract images for my design projects,
                and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! </p>
            </div>
        </div>
    )
}