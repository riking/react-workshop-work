import { useState } from 'react';
import {Post} from '../types';
import PostForm from './PostForm';
import PostInList from './PostInList';
import './SocialPosts.css';

const MOCK_POSTS: Post[] = [
    // Data source:
    // https://try.discourse.org/t/a-bear-however-hard-he-tries-grows-tubby-without-exercise/48.json?include_raw=true
    {
        title: "stineman #68",
        thought: "> “A bear, however hard he tries, grows tubby without exercise.”  \n> ― A.A. Milne, Winnie-the-Pooh \n\nAs a programmer I sit at a desk at work, which means I'm overweight, but worse - I'm out of shape. I wouldn't mind the extra weight if I knew that my heart, kidneys and other internal organs also didn't mind, but given that I do little regular physical activity that gets my heart rate up for 30+ minutes I know that I'm both fat and unfit.\n\nWhat are some suggestions on ways to get myself onto a road and in a set of habits that will, at minimum, keep me in shape so that I don't die of heart disease in my 50's, or succumb to diabetes (as popular as it is, I think I'd like to opt out this lifetime), or attract some other illness that seems invariably drawn to the unfit and overweight.\n\nWhat did you do to break out of your comfort zone?\n\nWas risk of shortened life span enough for you, or are you using other mental tricks to keep yourself motivated?\n\nWhat benefits of regular aerobic exercise can I expect to get that might also motivate me to do so?\n\nDo you even lift, bro?",
    },
    {
        title: "clay_7 #70",
        thought: "How about a treadmill desk?\n\nJeff LeMarche, iPhone developer, had a series of blog posts about using a treadmill desk. In the final one that he posted, he included plans for building it. It was an interesting series to read. Have a look!\n\nhttp://iphonedevelopment.blogspot.com/2011/12/brilliantly-simple-idea-treadmill-desk.html\n\nhttp://iphonedevelopment.blogspot.com/2011/12/treadmill-desk-update.html\n\nhttp://iphonedevelopment.blogspot.com/2012/01/treadmill-desk-plans.html",
    },
    {
        title: "gknauss #73",
        thought: "The combination of a treadmill (not a desk, just a treadmill), an iPad and video streaming has been _great_ for me.  It's the only exercise I've been able to sustain for longer than a couple of weeks in the past 20 years.  I walk 3.5 miles every day -- takes an hour -- and while it hasn't helped my weight significantly, I'm very happy with being able to consistent get off my ass and move.  (I am not a doctor, but if you're hugely out of shape, you should have a check-up before beginning any exercise regimen.)  This year, my goal is 875 miles -- 3.5 miles every weekday for 50 weeks.  I'm pretty sure I can do it.\n\nBonus upside: I'm catching up on all the cultural milestones -- well, video-based cultural milestones -- that I never had time for.",
    },
    {
        title: "codinghorror #235",
        thought: "Have you looked into Dance Central?\n\nhttp://www.youtube.com/watch?v=y8wBW6ndVTE\n\nIt can *Teach you how to Dougie!* Provided you have an Xbox and a Kinect.\n\nBut seriously, I used to play DDR a lot and [Dance Central][1] is a zillion times better. You can import all the tracks from Dance Central 1 and 2 into DC3 for about five bucks a pop, and you've got a game with about 100 tracks to dancercise to!\n\nAnd y'know, could be worse. Could be jazzercize.\n\n\n\n[1]: http://www.dancecentral.com/",
    },
    {
        title: "stienman #283",
        thought: "Will it teach me that Gangnam dance that the youth still seem to like?  The macarena, which just won't die?",
    },
    {
        title: "Eggs_McLaren #2630",
        thought: `[quote="codinghorror, post:4, topic:48"]\nAnd y'know, could be worse. Could be jazzercize.\n[/quote]\n\nThat was before *prancercise*\n\nhttps://www.youtube.com/watch?v=o-50GjySwew\n\nFeel the power.`,
    }
]

interface Props {

}

const SocialPosts = () => {
  const [postList, setPostList] = useState<Post[]>(MOCK_POSTS);
  const [showCreateThought, setShowCreateThought] = useState(false);

  const createPost = (p: Post) => {
    setShowCreateThought(false);

  };

  const cancelPosting = () => {
    setShowCreateThought(false);
  };

  return (
    <div className='SocialPosts'>
        <button onClick={() => setShowCreateThought(true)}>Create Post</button>
        <PostForm modalVisible={showCreateThought} onSubmitForm={createPost} onClose={cancelPosting} />
        <div className='postList'>
            {postList.map(p => {
                return (
                    <PostInList key={p.title} post={p} onDelete={() => {}} />
                );
            })}
        </div>
    </div>
  )
};

export default SocialPosts;
