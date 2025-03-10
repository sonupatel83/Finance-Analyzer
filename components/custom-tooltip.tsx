import { format } from "date-fns";

import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload[0]) return null;

    const date = new Date(payload[0]?.payload?.date);
    const income = payload[0]?.value ?? 0;
    const expenses = payload[1]?.value ?? 0;

    if (!date) return null;

    return (
        <div className="rounded-sm bg-white shadow-sm overflow-hidden">
            <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
                {format(date, "MMM dd, yyyy")}
            </div>
            <Separator />
            <div className="p-2 px-3 space-y-1">
                <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="size-1.5 bg-blue-500 rounded-full" />
                        <p className="text-xs text-muted-foreground">Income</p>
                    </div>
                    <p className="text-sm text-right font-medium">
                        {formatCurrency(income)}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="size-1.5 bg-red-500 rounded-full" />
                        <p className="text-xs text-muted-foreground">
                            Expenses
                        </p>
                    </div>
                    <p className="text-sm text-right font-medium">
                        {formatCurrency(expenses * -1)}
                    </p>
                </div>
            </div>
        </div>
    );
};
