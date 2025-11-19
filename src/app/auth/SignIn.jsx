import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// ✅ Import icons directly from lucide-react
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';
import { PATHS } from '@/config/path.config';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Got the data...', data);
  };

  const handleHidePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-8 space-y-5"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="h-10 rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between space-x-2">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className="h-10 rounded flex-1"
                    />
                    <Button
                      type="button"
                      onClick={handleHidePassword}
                      
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-10"
            aria-label="Login to your Account"
          >
            Login
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="flex items-center justify-center mt-6">
        <span className="text-sm">
          Don't have an account?{' '}
          <Link to={PATHS.SIGNUP} className="text-primary hover:underline">
            Create Account
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignIn;
