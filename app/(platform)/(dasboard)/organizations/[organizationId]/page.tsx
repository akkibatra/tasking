import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";
import { Suspense } from "react";
import { checkSubscription } from "@/lib/subscription";

const OrganizationPageId = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <Separator />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationPageId;
