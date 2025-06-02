
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConsultCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        <span className="text-xl font-medium">Register to consult with a nutritionist →</span>
        <Link to="/register">
          <Button className="bg-fitness-orange hover:bg-fitness-orangeHover rounded-full px-8">
            Start
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConsultCard;
