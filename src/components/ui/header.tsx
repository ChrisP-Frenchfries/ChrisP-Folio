
import { Card, CardHeader, CardTitle, } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
export function Header() {
    return (
      
    <Card className="w-full max-w-3xl mx-auto mt-4">
      <CardHeader className="flex flex-row items-center space-x-4 p-4">
        <Avatar>
          <AvatarImage src="/path-to-your-logo.png" alt="Logo" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
      </CardHeader>
    </Card>
      
    )
}