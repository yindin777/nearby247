name = "nearby360"  # Match your repo/project name here
type = "javascript"

[build]
command = "npm run build"  # This runs the build command from package.json
output_dir = "dist"  # This is where Vite will output the built files

[[pages]]
name = "nearby360"  # Match the project name here as well
path = "dist"  # This is the directory from which Cloudflare will serve files
