
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Post {
  id: number;
  title: string;
  gender: string;
  age: number;
  content: string;
}

const CommunityForum = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({
    title: '',
    gender: '',
    age: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewPost(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const post = {
      id: Date.now(),
      title: newPost.title,
      gender: newPost.gender,
      age: parseInt(newPost.age),
      content: newPost.content
    };
    
    setPosts(prev => [post, ...prev]);
    
    toast({
      title: "Post submitted!",
      description: "Your post has been added to the community forum.",
    });
    
    // Reset form
    setNewPost({
      title: '',
      gender: '',
      age: '',
      content: ''
    });
  };

  // Calculate statistics
  const genderCount = {
    Male: posts.filter(post => post.gender === 'male').length,
    Female: posts.filter(post => post.gender === 'female').length,
    Other: posts.filter(post => post.gender === 'other').length
  };

  const ageRanges = {
    '10-19': posts.filter(post => post.age >= 10 && post.age <= 19).length,
    '20-29': posts.filter(post => post.age >= 20 && post.age <= 29).length,
    '30-39': posts.filter(post => post.age >= 30 && post.age <= 39).length,
    '40-49': posts.filter(post => post.age >= 40 && post.age <= 49).length,
    '50+': posts.filter(post => post.age >= 50).length
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input
                id="title"
                name="title"
                value={newPost.title}
                onChange={handleChange}
                placeholder="Post Title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select 
                value={newPost.gender} 
                onValueChange={handleSelectChange}
                required
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
            
            <div className="space-y-2">
              <Label htmlFor="age">Your Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={newPost.age}
                onChange={handleChange}
                placeholder="Your Age"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">What's on your mind?</Label>
              <Textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                className="min-h-[100px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-fitness-orange hover:bg-fitness-orangeHover"
            >
              Post
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Community Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Gender Count:</h3>
              <div className="space-y-1">
                <p>Male: {genderCount.Male}</p>
                <p>Female: {genderCount.Female}</p>
                <p>Other: {genderCount.Other}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Age Ranges:</h3>
              <div className="space-y-1">
                <p>10–19: {ageRanges['10-19']}</p>
                <p>20–29: {ageRanges['20-29']}</p>
                <p>30–39: {ageRanges['30-39']}</p>
                <p>40–49: {ageRanges['40-49']}</p>
                <p>50+: {ageRanges['50+']}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityForum;
