
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

// Supabase configuration - you'll need to connect your project to Supabase
// via the Supabase integration button in the Lovable interface
const supabaseUrl = 'https://egzgzubluhpizdpjvmre.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnemd6dWJsdWhwaXpkcGp2bXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MzYwOTYsImV4cCI6MjA2MjAxMjA5Nn0.TJfRFaOfjKwgWSAArozYZcl58qK0L8pcPia92mU7ZFs';

// Import this in your actual project file
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

const RegistrationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Log the data (for debugging)
      console.log('Form submitted:', formData);
      
      // Insert the data into Supabase
      const { data, error } = await supabase
        .from('users')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            password: formData.password,
            telephone: formData.telephone || null,
            age: parseInt(formData.age),
            height: parseInt(formData.height),
            weight: parseInt(formData.weight),
            gender: formData.gender || null
          }
        ]);
      
      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
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
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      toast({
        title: "Registration failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
            >
              Clear Form
            </Button>
            <Button 
              type="submit" 
              className="bg-fitness-orange hover:bg-fitness-orangeHover"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
