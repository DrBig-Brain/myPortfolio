import { GitHubCalendar } from "react-github-calendar";

export const Github = () => {
  return (<>
    <div id="activity" className="flex flex-col items-center py-4 scroll-mt-28 px-4 sm:hidden">
      <div className="pb-8"><h1 className="text-3xl sm:text-5xl md:text-7xl text-bold text-action-primary hover:underline hover:-translate-y-2 transition-all duration-300">my activity</h1></div>
      <div className="py-4 hover:-translate-y-2 transition-all duration-300"><GitHubCalendar className="text-action-secondary" username="DrBig-Brain" /></div>
    </div>
  </>
  );
}