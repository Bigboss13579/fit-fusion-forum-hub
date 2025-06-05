import React, { useEffect, useState } from 'react';
import axios from 'axios'
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

  // useEffect คือ call func ข้างใน
  useEffect(() => {
    getPost();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewPost(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const post = {
      id: Date.now(),
      title: newPost.title,
      gender: newPost.gender,
      age: parseInt(newPost.age),
      content: newPost.content
    };
    setPosts(prev => [post, ...prev]);

    console.log(post.title)
    console.log(post.gender)
    console.log(post.age)
    console.log(post.content)

    await axios.post('http://localhost:3000/post', {
      title: post.title,
      gender: post.gender,
      age: post.age,
      comment: post.content
    }).then((result) => {
      if (result.status === 200) {
        toast({
          title: "Post submitted!",
          description: "Your post has been added to the community forum.",
        });
        getPost(); // to fetch submitted post
      } else {
        console.error(result.data);
      }
    })

    // Reset form
    setNewPost({
      title: '',
      gender: '',
      age: '',
      content: ''
    });
  };

  // getPost fetch post database
  const getPost = async () => {
    try {
      const result = await axios.get('http://localhost:3000/post_data');

      if (result.status === 200) {
        // map variable to interface Post
        const mappedPosts = result.data.map((item: any) => ({
          id: item.id,
          title: item.PostTitle,
          gender: item.PosterGender,
          age: item.PosterAge,
          content: item.PostComment,
        }));

        setPosts(mappedPosts);

        toast({
          title: "Post retrieved",
          description: `${result.data.length} posts fetched.`,
        });
      } else {
        console.error("error response status", result.status);
      }
    } catch (error) {
      console.error("error fetching post: ", error)
    }
  }

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

  const handleDeletePost = async (id: number) => {
    try {
      const result = await axios.delete(`http://localhost:3000/post/${id}`);
      if (result.status === 200) {
        toast({
          title: "Post deleted!",
          description: "Your post has been removed from the community forum.",
        });
        getPost(); // refresh posts
      } else {
        console.error(result.data);
      }
    } catch (error) {
      console.error("error deleting post: ", error);
    }
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

      {
        posts.length > 0 && (
          <div className='space-y-6 mt-8'>
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <p><strong>Gender: </strong>{post.gender}</p>
                  <p><strong>Age: </strong>{post.age}</p>
                  <p><strong>Content: </strong>{post.content}</p>
                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    className="mt-2 bg-red-500 hover:bg-red-600"
                  >
                    Delete Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      }

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
