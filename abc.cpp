#include <bits/stdc++.h>
using namespace std;
char l;
char s[100];
int idx;
bool error;
void A();
void Aprime();
void S()
{
    if (l == 'c')
    {
        idx++;
        l = s[idx];
        A();
        if (l == 'd')
        {
            idx++;
            l = s[idx];
        }
       else {
            error = true;
            return;
        }
    }
    else
    {
        error = true;
        return;
    }
}
void A()
{
    if (l == 'a')
    {
        idx++;
        l = s[idx];
        Aprime();
    }
    else
    {
        error = true;
        return;
    }
}
void Aprime()
{
    if (l == 'b')
    {
        idx++;
        l = s[idx];
    }
}
int main()
{
    cout << "Enter String : ";
    cin >> s;
    l = s[0];
    error = false;
    idx = 0;
    S();
    if (l == '$')
    {
        printf("parsing == success");
    }
    else
    {
        printf("parsing == failed");
    }
}
