import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import { AreaChart, BarChart3, FileSearch, LineChart, Loader2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectValue,
    SelectTrigger,
    SelectItem,
} from "@/components/ui/select";

import { AreaVariant } from "@/components/area-variant";
import { BarVariant } from "@/components/bar-variant";
import { LineVariant } from "@/components/line-variant";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
    data?:{
        date: string;
        income: number;
        expenses: number;
    }[]; /*this [] creates an array of these above elemnts given */
};

export const Chart = ({data = []}: Props) => {
    const [chartType, setChartType ] = useState("area");

    const onTypeChange = (type: string) => {
        //todo add paywall
        setChartType(type);
    }

    return(
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Transactions
                </CardTitle>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Chart type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="area" >
                            <div className="flex items-center">
                                <AreaChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Area Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="line" >
                            <div className="flex items-center">
                                <LineChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Line Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="bar" >
                            <div className="flex items-center">
                                <BarChart3 className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Bar Chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">
                            No data for this period
                        </p>
                    </div>
                ):(
                    <>
                    {chartType === "line" && <LineVariant data={data} />}
                    {chartType === "area" && <AreaVariant data={data} />}
                    {chartType === "bar" && <BarVariant data={data} />}
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export const ChartLoading = () => {
    return (
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex justify-between space-y-2 lg:flex-row lg:items-center lg:space-y-0">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 w-full lg:w-[120px]" />
        </CardHeader>
        <CardContent>
          <div className="flex h-[350px] w-full items-center justify-center">
            <Loader2 className="size-6 animate-spin text-slate-300" />
          </div>
        </CardContent>
      </Card>
    );
  };