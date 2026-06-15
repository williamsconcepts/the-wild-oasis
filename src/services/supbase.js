import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rztyyajzwzmxeopvbddf.supabase.co";
const supabaseKey = "sb_publishable_2lIpyaCo5u9VJVLR5-XGhA_2f5Qou4t";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
