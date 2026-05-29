import { GitHubCalendar } from "react-github-calendar";

export const Github = () => {
  return (<>
    <div id="activity" className="flex flex-col items-center py-4">
        <div className="pb-12"><h1 className="text-7xl text-bold text-action-primary hover:underline hover:-translate-y-2 transition-all duration-300">my activity</h1></div>
        <div className="py-4 scale-150 hover:-translate-y-2 transition-all duration-300"><GitHubCalendar className="text-action-secondary" username="DrBig-Brain" /></div>
    </div>
  </>
  );
}