
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Registration successful!",
      description: "A nutritionist will contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      telephone: '',
      age: '',
      height: '',
      weight: '',
      gender: '',
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      telephone: '',
      age: '',
      height: '',
      weight: '',
      gender: '',
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-fitness-orange text-white text-center py-4 rounded-t-xl">
        <CardTitle>Join Our Community</CardTitle>
        <p className="font-normal">Register to get personalized nutrition advice</p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone">Telephone (optional)</Label>
            <Input 
              id="telephone" 
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Enter your telephone" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input 
              id="age" 
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input 
              id="height" 
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              placeholder="Enter your height in cm" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input 
              id="weight" 
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter your weight in kg" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender (optional)</Label>
            <Select 
              value={formData.gender} 
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleClear}
            >
              Clear Form
            </Button>
            <Button 
              type="submit" 
              className="bg-fitness-orange hover:bg-fitness-orangeHover"
            >
              Register
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
