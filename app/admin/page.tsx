import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page(){
    await new Promise((r) => setTimeout(r, 1000))
throw new Error("invalid pathname")

    return (
    <Card>
        <CardHeader>
            <CardTitle>URL: / admin </CardTitle>
        </CardHeader>
    </Card>
    )
}