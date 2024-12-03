import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Strategy } from "@/hooks/use-fund-data";
import { ellipsisAddress } from "@/utils";

const FundStats = ({ data }: { data?: Strategy }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trust Contract</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{ellipsisAddress(data?.strategyAddress!)}</div>
          <p className="text-xs text-muted-foreground">
            Deployed{" "}
            {formatDistanceToNow(new Date(data?.blockTimestamp! * 1000), {
              addSuffix: true,
            })}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pool Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.poolSize}</div>
          <p className="text-xs text-muted-foreground">+0% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundStats;