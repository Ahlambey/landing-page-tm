import React from "react";
/* import { useLang } from "../../LangProvider"; */

export default function JoinWaitingList() {
  /* const { t } = useLang(); */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light text-neutral-dark px-4 ">
{/*       <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-artisan-midnight mt-20">
        {t("joinWaitingListTitle")}
      </h2>
      <p className="mb-8 text-center max-w-md text-artisan-midnight">
        {t("joinWaitingListText")}
      </p> */}
      <div className="w-full max-w-2xl">
        <iframe
          title="google-forms"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdvHzbjuoq_sr41Xr2-IR2x3N3mZXK77PXaTzKLOQf4TzNLxA/viewform?embedded=true"
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
