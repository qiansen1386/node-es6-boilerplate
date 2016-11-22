# 1st command is recommaned 
# For Ubuntu Bash on Windows/POSIX environment
export PATH="$PATH:$(npm bin)"
# If use git bash/mitty on Windows. $(npm bin) will return a unsupported win-format path
# However putting node_modules/ in front may cause security risks.
#export PATH="./node_modules/.bin:$PATH" # Lagancy method, DO NOT use for production
