import BitManager from "../BitManager";
// import ProfileForm from "../ProfileForm";

function MyBundleScreen() {
  return (
    <div className="h-full overflow-y-scroll scrollbar-hidden-until-overflow flex justify-center items-center">
      <div className="h-[90%] w-full max-w-[800px] flex flex-col gap-8">
        {/* <ProfileForm /> */}
        <BitManager />
      </div>
    </div>
  );
}

export default MyBundleScreen;
